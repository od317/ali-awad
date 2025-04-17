// components/book-builder/StorySelector.tsx
const stories = Array.from({ length: 20 }, (_, i) => ({
  id: `story-${i + 1}`,
  title: `Adventure #${i + 1}`,
}));

export default function StorySelector2({
  selected,
  onSelect,
  onNext,
}: {
  selected: string[];
  onSelect: (ids: string[]) => void;
  onNext: () => void;
}) {
  const toggleStory = (id: string) => {
    if (selected.includes(id)) {
      onSelect(selected.filter((s) => s !== id));
    } else if (selected.length < 10) {
      onSelect([...selected, id]);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-primary mb-4">
        Choose up to 10 Adventures
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stories.map((story) => (
          <button
            key={story.id}
            onClick={() => toggleStory(story.id)}
            className={`p-4 border rounded-md text-left transition-all ${
              selected.includes(story.id)
                ? "border-book-primary bg-book-primary text-white"
                : "border-gray-300 hover:bg-gray-100"
            }`}
          >
            {story.title}
          </button>
        ))}
      </div>
      <div className="mt-6 text-right">
        <button
          onClick={onNext}
          disabled={selected.length !== 10}
          className={`btn-primary ${
            selected.length !== 10 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
