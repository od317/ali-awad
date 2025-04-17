"use client";

import CharacterForm from "@/components/book-generator/CharacterForm";
import StorySelector2 from "@/components/book-generator/StorySelector2";
import { Character } from "@/types/bookBuilder";
import { useState } from "react";
import { FiPlus, FiEdit } from "react-icons/fi";

export default function BookBuilderPage() {
  const [step, setStep] = useState<string>("main");
  const [mainCharacter, setMainCharacter] = useState<Character | null>(null);
  const [sideCharacters, setSideCharacters] = useState<Character[]>([]);
  const [selectedStories, setSelectedStories] = useState<string[]>([]);
  const [editingCharacterIndex, setEditingCharacterIndex] = useState<
    number | null
  >(null);

  const handleSaveMainCharacter = (character: Character) => {
    setMainCharacter(character);
    setStep("side");
  };

  const handleSaveSideCharacter = (character: Character) => {
    if (editingCharacterIndex !== null) {
      const updated = [...sideCharacters];
      updated[editingCharacterIndex] = character;
      setSideCharacters(updated);
      setEditingCharacterIndex(null);
    } else {
      setSideCharacters([...sideCharacters, character]);
    }
    setStep("side");
  };

  const handleEditCharacter = (index: number) => {
    setEditingCharacterIndex(index);
    setStep("edit-side");
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-8 text-primary">
      {/* Book Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-primary mb-2">
          Create Your Personalized Adventure Book
        </h1>
        <p className="text-secondary max-w-2xl">
          Customize your hero and their sidekicks. Choose your adventures. We'll
          turn it into a real book with your own story!
        </p>
        <div className="mt-6 flex items-start gap-6 flex-col md:flex-row">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/06/Atomic_habits.jpg"
            alt="Book Cover"
            className="w-40 h-56 object-cover rounded shadow-md"
          />
          <div className="space-y-2 text-sm text-secondary">
            <p>
              <strong>Title:</strong> "The Great Imaginarium"
            </p>
            <p>
              <strong>Author:</strong> AI StorySmith
            </p>
            <p>⭐️⭐️⭐️⭐️☆ (200 Reviews)</p>
            <p className="text-green-700 font-medium">
              Available in print & digital
            </p>
          </div>
        </div>
      </div>

      {/* Steps */}
      {step === "main" && (
        <CharacterForm
          onSave={handleSaveMainCharacter}
          onNext={() => setStep("side")}
        />
      )}

      {step === "side" && (
        <div className="space-y-8">
          <h2 className="text-xl font-semibold text-primary">
            Your Main Character
          </h2>
          {mainCharacter && (
            <CharacterCard character={mainCharacter} readOnly />
          )}

          <div className="flex justify-between items-center mt-6">
            <h3 className="text-lg font-medium text-primary">
              Side Characters
            </h3>
            <button
              onClick={() => setStep("add-side")}
              className="btn-outline flex items-center gap-2"
            >
              <FiPlus />
              Add Side Character
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {sideCharacters.map((char, index) => (
              <div key={index} className="relative">
                <CharacterCard character={char} />
                <button
                  onClick={() => handleEditCharacter(index)}
                  className="absolute top-2 right-2 p-2 text-xs bg-white shadow rounded-full hover:bg-gray-100"
                >
                  <FiEdit />
                </button>
              </div>
            ))}
          </div>

          <div className="text-right">
            <button
              onClick={() => setStep("stories")}
              className="btn-primary"
              disabled={sideCharacters.length === 0}
            >
              Next: Choose Stories
            </button>
          </div>
        </div>
      )}

      {step === "add-side" && (
        <CharacterForm
          onSave={handleSaveSideCharacter}
          onNext={() => setStep("side")}
        />
      )}

      {step === "edit-side" && editingCharacterIndex !== null && (
        <CharacterForm
          character={sideCharacters[editingCharacterIndex]}
          onSave={handleSaveSideCharacter}
          onNext={() => setStep("side")}
        />
      )}

      {step === "stories" && (
        <StorySelector2
          selected={selectedStories}
          onSelect={setSelectedStories}
          onNext={() => setStep("done")}
        />
      )}

      {step === "done" && (
        <div className="text-center mt-10 space-y-4">
          <h2 className="text-2xl font-bold text-primary">You're All Set!</h2>
          <p className="text-secondary">
            Your personalized book is ready to order.
          </p>
          <button className="btn-primary">Order Now</button>
        </div>
      )}
    </main>
  );
}

// Preview character card
function CharacterCard({
  character,
  readOnly,
}: {
  character: Character;
  readOnly?: boolean;
}) {
  return (
    <div className="p-4 bg-primary border border-gray-300 rounded-lg shadow">
      <div className="w-full mb-4">
        <img
          src="https://via.placeholder.com/200x280?text=Character"
          alt="Character Placeholder"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
      <h3 className="font-semibold text-primary">
        {character.name || "Unnamed"}
      </h3>
      <ul className="text-sm text-secondary space-y-1 mt-2">
        <li>Gender: {character.gender}</li>
        <li>Age: {character.age}</li>
        <li>Hairstyle: {character.hairstyle}</li>
        <li>Hair Color: {character.hairColor}</li>
        <li>Eye Color: {character.eyeColor}</li>
        <li>Skin Tone: {character.skinColor}</li>
      </ul>
    </div>
  );
}
