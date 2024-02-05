import { useState } from "react";
import PageComponent from "../components/PageComponent";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { Autocomplete, TextField } from "@mui/material";
import axiosClient from "../axios.js"
import TButton from "../components/core/TButton";

function SurveyView() {
  const [survey, setSurvey] = useState({
    title: "",
    slug: "",
    condition: false,
    status: "",
    description: "",
    image: null,
    image_url: null,
    expire_date: "",
    question: [],
  });
  const names = [
    {
      id: 1,
      title: "Angular.js",
    },
    {
      id: 2,
      title: "React.js",
    },
    {
      id: 3,
      title: "Vue.js",
    },
    {
      id: 4,
      title: "ASP.NET",
    },
    {
      id: 5,
      title: "Django",
    },
    {
      id: 6,
      title: "Laravel",
    },
    {
      id: 7,
      title: "Express",
    },
    {
      id: 8,
      title: "React Native",
    },
    {
      id: 9,
      title: "Android",
    },
    {
      id: 10,
      title: "Keras",
    },
    {
      id: 11,
      title: "TensorFlow",
    },
    {
      id: 12,
      title: "Web",
    },
    {
      id: 13,
      title: "Mobile",
    },
    {
      id: 14,
      title: "Artificial Intelligence",
    },
  ];
  const onSubmit = (ev) => {
    ev.preventDefault();
    axiosClient.post("/survey", {
      title: "jhg",
      description: "",
      expire_date: "2023-04-30",
      status: true,
    });
  }

  return (
    <PageComponent title="Create new Survey">
      <form action="#" method="POST" onSubmit={onSubmit}>
        <div className="shadow sm:overflow-hidden sm:rounded-md">
          <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
            {/* Image */}
            <div>
              <label
                htmlFor="photo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Photo
              </label>
              <div className="mt-1 flex items-center">
                {survey.image_url ? (
                  <img
                    src={survey.image_url}
                    alt=""
                    className="w-32 h-32 object-cover"
                  />
                ) : (
                  <span className="flex justify-center  items-center text-gray-400 h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                    <PhotoIcon className="w-8 h-8" />
                  </span>
                )}
                <button
                  type="button"
                  className="relative ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <input
                    type="file"
                    className="absolute left-0 top-0 right-0 bottom-0 opacity-0"
                    // onChange={onImageChoose}
                  />
                  Change
                </button>
              </div>
            </div>
            {/* Image */}
            {/* Title */}
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Survey Title
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={survey.title}
                  onChange={(ev) =>
                    setSurvey({ ...survey, title: ev.target.value })
                  }
                  autoComplete="given-name"
                  className="block w-full rounded-md border-2 py-2 px-2 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/* Title */}
            {/*Description*/}
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                name="description"
                id="description"
                value={survey.description || ""}
                onChange={(ev) =>
                  setSurvey({ ...survey, description: ev.target.value })
                }
                placeholder="Describe your survey"
                className="resize-none mt-1 p-3 border-2 block w-full rounded-md ring-gray-300 shadow-sm sm:text-sm"
              ></textarea>
            </div>
            {/*Description*/}
            {/*Expire Date*/}
            <div>
              <label
                htmlFor="expire_date"
                className="block text-sm font-medium text-gray-700"
              >
                Expire Date
              </label>
              <input
                type="date"
                name="expire_date"
                id="expire_date"
                value={survey.expire_date}
                onChange={(ev) =>
                  setSurvey({ ...survey, expire_date: ev.target.value })
                }
                className="mt-1 p-2 border-2 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
              />
            </div>
            {/*Expire Date*/}
            {/*Tag*/}
            <label
              htmlFor="expire_date"
              className="block text-sm font-medium text-gray-700"
            >
              Status
            </label>
            <Autocomplete
              multiple
              id="size-small-outlined-multi"
              size="small"
              options={names}
              getOptionLabel={(option) => option.title}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="tags"
                  placeholder="topics"
                />
              )}
            />
            {/*Tag*/}
            {/*Active*/}
            <div className="flex items-start">
              <div className="flex h-5 items-center">
                <input
                  id="status"
                  name="status"
                  type="checkbox"
                  checked={survey.status}
                  onChange={(ev) =>
                    setSurvey({ ...survey, status: ev.target.checked })
                  }
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="comments" className="font-medium text-gray-700">
                  Premium
                </label>
                <p className="text-gray-500">This survey need to unlock vip</p>
              </div>
            </div>
            {/*Active*/}
            {/* <button type="button">
              Add question
            </button>
            <SurveyQuestions
              questions={survey.questions}
              onQuestionsUpdate={onQuestionsUpdate}
            /> */}
            <div className="flex justify-center px-4 py-3 text-center sm:px-6 w-full">
              <TButton color="blue" styles="text-lg">
                Save
              </TButton>
            </div>
          </div>
        </div>
      </form>
    </PageComponent>
  );
}

export default SurveyView
