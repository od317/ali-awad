"use client";
interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export default function RichTextEditor({
  value,
  onChange,
  disabled,
}: RichTextEditorProps) {
  return (
    <div className="bg-white">
      <textarea
        value={value}
        placeholder="Write your blog post content here..."
        className="h-64 mb-4"
      />
    </div>
  );
}
