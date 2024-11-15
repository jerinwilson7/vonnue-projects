type GreetProps = {
  name: string;
  unreadMessages ?: number;
  isLoggedIn: boolean;
};

function Greet(props: GreetProps) {
    const {unreadMessages} = props
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Welcome ${props.name} You have have ${unreadMessages} unread messages`
          : "Welcome Guest"}
      </h2>
    </div>
  );
}

export default Greet;
