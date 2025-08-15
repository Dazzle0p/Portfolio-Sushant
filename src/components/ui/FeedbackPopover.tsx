import * as React from "react";
import * as Popover from "@radix-ui/react-popover";
import { useToast } from "@/hooks/use-toast";

export const FeedbackPopover: React.FC = () => {
  const { toast } = useToast();
  const [name, setName] = React.useState("");
  const [feedback, setFeedback] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [open, setOpen] = React.useState(false); // control popover state

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    console.log({ name, feedback });

    setName("");
    setFeedback("");

    setTimeout(() => {
      setLoading(false);
      setOpen(false); // close popover after submit
      toast({
        title: "Sent!",
        description: "Thanks for Yor Valuable feedback.",
      });
    }, 1000);
  };

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <button className="glass-base hover:glass-hover ml-1 px-4 py-2 rounded-lg shadow-glow text-sm font-medium bg-gradient-primary text-primary-foreground hover-scale">
          Give Feedback
        </button>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          sideOffset={8}
          className="glass-base rounded-xl p-4 w-72 shadow-glow-strong border border-border animate-in fade-in-80"
        >
          <h3 className="text-lg font-semibold mb-2">Your Feedback</h3>
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="block text-sm text-muted-foreground mb-1">
                Name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-3 py-2 rounded-lg bg-muted text-foreground border border-input focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-1">
                Feedback
              </label>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Write your feedback..."
                className="w-full px-3 py-2 rounded-lg bg-muted text-foreground border border-input focus:outline-none focus:ring-2 focus:ring-primary"
                rows={3}
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 rounded-lg bg-gradient-primary text-primary-foreground font-medium hover-scale"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
          <Popover.Arrow className="fill-border" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
