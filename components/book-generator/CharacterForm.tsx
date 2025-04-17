"use client";

import { useState, useEffect } from "react";
import { Character } from "@/types/bookBuilder";
import { FiArrowRight } from "react-icons/fi";

const defaultCharacter: Character = {
  name: "",
  gender: "Male",
  hairstyle: "Short",
  hairColor: "black",
  eyeColor: "brown",
  skinColor: "light",
  age: 10,
};

const genders = ["Male", "Female", "Other"];
const hairstyles = ["Short", "Long", "Curly", "Bald"];
const colors = ["black", "brown", "blonde", "red", "blue", "green"];
const skinTones = ["light", "tan", "brown", "dark"];

export default function CharacterForm({
  character,
  onSave,
  onNext,
}: {
  character?: Character;
  onSave: (c: Character) => void;
  onNext: () => void;
}) {
  const [data, setData] = useState<Character>(character || defaultCharacter);

  useEffect(() => {
    if (character) {
      setData(character);
    }
  }, [character]);

  const handleSelect = <K extends keyof Character>(
    key: K,
    value: Character[K]
  ) => {
    setData({ ...data, [key]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(data);
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block font-medium text-primary mb-1">Name</label>
        <input
          type="text"
          className="input"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
      </div>

      {/* Gender */}
      <RadioGroup
        label="Gender"
        options={genders}
        selected={data.gender}
        onSelect={(value) => handleSelect("gender", value)}
      />

      {/* Hairstyle */}
      <RadioGroup
        label="Hairstyle"
        options={hairstyles}
        selected={data.hairstyle}
        onSelect={(value) => handleSelect("hairstyle", value)}
      />

      {/* Hair Color */}
      <ColorGroup
        label="Hair Color"
        colors={colors}
        selected={data.hairColor}
        onSelect={(value) => handleSelect("hairColor", value)}
      />

      {/* Eye Color */}
      <ColorGroup
        label="Eye Color"
        colors={colors}
        selected={data.eyeColor}
        onSelect={(value) => handleSelect("eyeColor", value)}
      />

      {/* Skin Color */}
      <ColorGroup
        label="Skin Tone"
        colors={skinTones}
        selected={data.skinColor}
        onSelect={(value) => handleSelect("skinColor", value)}
      />

      {/* Age */}
      <div>
        <label className="block font-medium text-primary mb-1">Age</label>
        <input
          type="number"
          className="input"
          min={1}
          max={100}
          value={data.age}
          onChange={(e) => setData({ ...data, age: parseInt(e.target.value) })}
        />
      </div>

      {/* Save */}
      <button type="submit" className="btn-primary flex items-center gap-2">
        Save Character <FiArrowRight />
      </button>
    </form>
  );
}

function RadioGroup({
  label,
  options,
  selected,
  onSelect,
}: {
  label: string;
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
}) {
  return (
    <div>
      <p className="font-medium text-primary mb-1">{label}</p>
      <div className="flex gap-2 flex-wrap">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => onSelect(opt)}
            className={`px-4 py-1 rounded-full border ${
              selected === opt
                ? "bg-book-primary text-white border-book-primary"
                : "bg-white text-primary border-gray-300"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

function ColorGroup({
  label,
  colors,
  selected,
  onSelect,
}: {
  label: string;
  colors: string[];
  selected: string;
  onSelect: (value: string) => void;
}) {
  return (
    <div>
      <p className="font-medium text-primary mb-1">{label}</p>
      <div className="flex gap-2 flex-wrap">
        {colors.map((color) => (
          <button
            key={color}
            type="button"
            onClick={() => onSelect(color)}
            className={`w-8 h-8 rounded-full border-2 ${
              selected === color ? "border-book-primary" : "border-gray-300"
            }`}
            style={{ backgroundColor: color }}
            title={color}
          />
        ))}
      </div>
    </div>
  );
}
