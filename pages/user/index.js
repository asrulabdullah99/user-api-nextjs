import Layout from "../components/layout";
import Link from "next/link";
import axios from "axios";

export async function getServerSideProps() {
  const req = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BACKEND}/api/user/view`
  );
  const res = await req.data;

  return {
    props: {
      user: res,
    },
  };
}

function UserIndex(props) {
  const { user } = props;
  return (
    <Layout>
      <table className="table table-bordered mb-0">
        <thead>
          <tr>
            <th scope="col">Nama</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {user.map((user) => (
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
}

export default UserIndex;
