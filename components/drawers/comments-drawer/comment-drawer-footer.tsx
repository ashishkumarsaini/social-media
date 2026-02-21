import { Button, Input } from "@/components/ui";
import { SendHorizonal } from "lucide-react";

export const CommentsDrawerFooter = () => {
  return (
    <form className="flex gap-2">
      <Input placeholder="Write comment" className="text-sm" required />
      <Button label="Submit Comment" type="submit">
        <SendHorizonal className="size-4" />
      </Button>
    </form>
  );
};
