import { BookTemplate } from "./types";
import { FiStar } from "react-icons/fi";

interface BookPreviewProps {
  template: BookTemplate;
  currentStep: number;
}

export default function BookPreview({
  template,
  currentStep,
}: BookPreviewProps) {
  const steps = [
    "Create Main Character",
    "Add Side Characters",
    "Choose Story Elements",
  ];

  return (
    <div className="flex flex-col md:flex-row gap-8 bg-book-paper p-6 rounded-lg shadow-sm">
      {/* Book Cover */}
      <div className="md:w-1/3 flex-shrink-0">
        <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-lg">
          <img
            src={template.coverImage}
            alt={template.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Book Info */}
      <div className="md:w-2/3">
        <h1 className="text-3xl font-bold mb-2">{template.title}</h1>
        <p className="text-lg text-gray-700 mb-4">{template.description}</p>

        {/* Reviews */}
        <div className="mb-6">
          <h3 className="font-bold mb-2">What Readers Say:</h3>
          <div className="space-y-3">
            {template.reviews.map((review, index) => (
              <div key={index} className="bg-white p-3 rounded shadow-xs">
                <div className="flex items-center mb-1">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className={`h-4 w-4 ${
                        i < review.rating
                          ? "text-yellow-500 fill-yellow-500"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 font-medium">{review.author}</span>
                </div>
                <p className="text-sm text-gray-700">"{review.content}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="bg-white p-4 rounded-lg">
          <h3 className="font-bold mb-3">Creation Progress</h3>
          <div className="space-y-2">
            {steps.map((step, index) => (
              <div
                key={step}
                className={`flex items-center gap-3 p-2 rounded ${
                  currentStep > index + 1
                    ? "bg-green-50"
                    : currentStep === index + 1
                    ? "bg-book-primary-light"
                    : "bg-gray-50"
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    currentStep > index + 1
                      ? "bg-green-500 text-white"
                      : currentStep === index + 1
                      ? "bg-book-primary text-white"
                      : "bg-gray-300"
                  }`}
                >
                  {currentStep > index + 1 ? "✓" : index + 1}
                </div>
                <span
                  className={currentStep === index + 1 ? "font-medium" : ""}
                >
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
