import { useState } from "react";
import { socket } from "../../socket";
import { ReactElement } from "react";

function ChatForm(): ReactElement {
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(event: React.FormEvent): void {
    event.preventDefault();
    setIsLoading(true);

    socket.timeout(5000).emit("create-something", value, () => {
      setIsLoading(false);
    });
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        onChange={(e) => setValue(e.target.value)}
        aria-label="Input Label"
      />

      <button type="submit" disabled={isLoading}>
        Submit
      </button>
    </form>
  );
}

export default ChatForm;
