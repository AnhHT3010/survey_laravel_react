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
          Create new survey
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
