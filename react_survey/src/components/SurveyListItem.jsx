import PropTypes from "prop-types";
import { useState } from "react";
import classNames from "classnames/bind";
import { formatDate } from "../contexts/ContextProvider";
import TButton from "./core/TButton";

function SurveyListItem({ survey, onDeleteClick }) {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div
      className="pb-2"
      onMouseEnter={() => setShowPopup(true)}
      onMouseLeave={() => setShowPopup(false)}
    >
      <div className="card-container">
        <div className="card bg-white p-4 shadow-md hover:shadow-lg transition duration-300 relative rounded-sm">
          {survey.status === "Vip" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              data-slot="icon"
              className="w-8 h-8 absolute z-10 p-2 text-yellow-100 bg-red-500 rounded-2xl top-0 right-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
          ) : (
            ""
          )}

          <div className="relative overflow-hidden">
            <img
              src={survey.image_url}
              alt={survey.title}
              className="w-full h-auto mb-2 transition-transform duration-300 transform hover:scale-105"
            />
            <div className="flex justify-between items-center my-5 text-sm">
              <h2 className="text-lg font-semibold">{survey.title}</h2>
              <span
                className={classNames(
                  survey.status === "Vip"
                    ? "bg-yellow-500 yellow-500 border-yellow-500"
                    : survey.status === "Xem nhiều"
                    ? "bg-red-500 red-500 border-red-500"
                    : "bg-green-500 green-500 border-green-500",
                  "text-white border-2 p-0.5 rounded-sm"
                )}
              >
                {survey.status}
              </span>
            </div>
            <div className="flex  justify-between items-center mt-2">
              <TButton to={`/surveys/${survey.id}`} color="yellow">
                <div>Chỉnh sửa</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </TButton>
              <div>
              <div className="flex flex-row gap-1">
                <TButton
                  link
                  href={`/view/survey/${survey.slug}`}
                  color="blue"
                  circle
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 19a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h7l2-2h3a2 2 0 012 2v12z"
                    />
                  </svg>
                </TButton>
                {survey.id && (
                  <TButton onClick={onDeleteClick} circle link color="red">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      data-slot="icon"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </TButton>
                )}
              </div>
              </div>
            </div>
          </div>
          {/* Popup */}
          {showPopup && (
            <div className="popup absolute bg-white p-4 shadow-md border border-gray-200 -ml-4 mt-6 z-10">
              <div className="absolute -top-1.5 right-7 w-0 h-0">
                <div className="w-5 h-5 bg-white transform rotate-45"></div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold">{survey.title}</h2>
                  <h5 className="text-sm font-semibold text-green-600">
                    Đã cập nhật tháng {formatDate(survey.updated_at)}
                  </h5>
                </div>
                <span
                  className={classNames(
                    survey.status === "Vip"
                      ? "bg-yellow-500 yellow-500 border-yellow-500"
                      : survey.status === "Xem nhiều"
                      ? "bg-red-500 red-500 border-red-500"
                      : "bg-green-500 green-500 border-green-500",
                    "text-white text-sm border-2 p-0.5 rounded-sm"
                  )}
                >
                  {survey.status}
                </span>
              </div>
              <p>{survey.description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
SurveyListItem.propTypes = {
  survey: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image_url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    condition: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    updated_at: PropTypes.string.isRequired,
    expire_date: PropTypes.string.isRequired,
    questions: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        question: PropTypes.string.isRequired,
        description: PropTypes.string,
        data: PropTypes.oneOfType([
          PropTypes.shape({
            options: PropTypes.arrayOf(
              PropTypes.shape({
                uuid: PropTypes.string.isRequired,
                text: PropTypes.string.isRequired,
              })
            ).isRequired,
          }),
          PropTypes.arrayOf(PropTypes.any),
        ]),
      })
    ),
  }).isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};
export default SurveyListItem;
