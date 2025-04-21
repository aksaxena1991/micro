import GenericInput from "./genericInput";

const GenericTextarea = (props) => {
  const { label } = props;
  return (
    <>
      <GenericInput label={label} multiline rows={3} {...props} />
    </>
  );
};
export default GenericTextarea;
