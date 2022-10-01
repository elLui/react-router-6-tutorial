const Dashboard = ({user}) => {
    console.log (user)
  return (
    <section className='section'>
      <h4>hello, {user?.name} - your email address is {user?.email}</h4>
    </section>
  );
};
export default Dashboard;
