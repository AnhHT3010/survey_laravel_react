import PageComponent from "../components/PageComponent";
import SurveyListItem from "../components/SurveyListItem";
import TButton from "../components/core/TButton";
import { useUserStateContext } from "../contexts/ContextProvider";

function Surveys() {
  const { surveys } = useUserStateContext();
  const onDeleteClick = () => {
    console.log("On click deleted");
  };
  return (
    <PageComponent
      title="Surveys"
      buttons={
        <TButton color="green" to="/surveys/create">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            data-slot="icon"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <h2 className="text-base">Create new survey</h2>
        </TButton>
      }
    >
      <div className="mx-auto py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          {surveys.map((survey) => (
            <div key={survey.id}>
              <SurveyListItem survey={survey} onDeleteClick={onDeleteClick} />
            </div>
          ))}
        </div>
      </div>
    </PageComponent>
  );
}

export default Surveys
