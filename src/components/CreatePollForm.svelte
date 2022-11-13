<script>
  import { createEventDispatcher } from "svelte";

  import Button from "../shared/Button.svelte";
  import PollStore from "../store/PollStore";

  const dispatch = createEventDispatcher();

  let fields = {
    question: "",
    answerA: "",
    answerB: "",
  };

  let errors = {
    question: "",
    answerA: "",
    answerB: "",
  };

  let valid = false;

  const handleSubmit = () => {
    valid = true;

    // validate question
    if (fields.question.trim().length < 5) {
      errors.question = "Question must be at least 5 characters";
      valid = false;
    } else {
      errors.question = "";
    }

    // validate answer A
    if (fields.answerA.trim().length < 1) {
      errors.answerA = "Answer A cannot be empty";
      valid = false;
    } else {
      errors.answerA = "";
    }

    // validate answer B
    if (fields.answerB.trim().length < 1) {
      errors.answerB = "Answer B cannot be empty";
      valid = false;
    } else {
      errors.answerB = "";
    }

    // if valid, submit form
    if (valid) {
      let poll = {
        ...fields,
        votesA: 0,
        votesB: 0,
        id: Math.random(),
      };

      PollStore.update((currentPolls) => {
        return [poll, ...currentPolls];
      });
      dispatch("add");
    }
  };
</script>

<form on:submit|preventDefault={handleSubmit}>
  <div class="form-group">
    <label for="question">Poll Question</label>
    <input
      type="text"
      class="form-control"
      id="question"
      bind:value={fields.question}
    />
    {#if errors.question}
      <div class="invalid-feedback">{errors.question}</div>
    {/if}
  </div>
  <div class="form-group">
    <label for="answer-a">Answer A:</label>
    <textarea
      class="form-control"
      id="answer-a"
      rows="3"
      bind:value={fields.answerA}
    />
    {#if errors.answerA}
      <div class="invalid-feedback">{errors.answerA}</div>
    {/if}
  </div>
  <div class="form-group">
    <label for="answer-b">Answer B:</label>
    <textarea
      class="form-control"
      id="answer-b"
      rows="3"
      bind:value={fields.answerB}
    />
    {#if errors.answerB}
      <div class="invalid-feedback">{errors.answerB}</div>
    {/if}
  </div>
  <Button type="primary" on:click={handleSubmit}>Submit</Button>
</form>

<style>
  form {
    max-width: 600px;
    margin: 0 auto;
    padding: 1rem;
  }

  .form-group {
    margin-bottom: 1rem;
  }

  .form-control {
    width: 100%;
  }

  .invalid-feedback {
    display: block;
    margin-top: 0.25rem;
    font-size: 80%;
    color: #dc3545;
  }
</style>
