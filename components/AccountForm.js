export default function AccountForm(props) {
  return (
    <div className="max-w-lg px-4 mx-auto pt-7">
      <form className="font-secondary py-10 text-gray-600 bg-white rounded-md shadow-xl">
        {props.children}
      </form>
    </div>
  );
}
