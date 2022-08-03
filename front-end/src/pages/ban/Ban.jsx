
import Search from '../../components/search/Search';
import Button from '../../components/button/Button';
import Wrapper from '../../components/layout/defaultLayout/wrapper/Wrapper';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams, useNavigate } from 'react-router-dom';
import * as listUser from '../../api/authUser';

const data = [
  { id: "U001", user: "Nguyen Van A", status: "Ban" },
  { id: "U001", user: "Nguyen Van A", status: "Unban" },
  { id: "U001", user: "Nguyen Van A", status: "Unban" },
  { id: "U001", user: "Nguyen Van A", status: "Ban" },
]
function Ban() {
  const [users, setUser] = useState({});
  const user = useSelector((state) => state.auth.login.currentUser);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetch() {
      const result = await listUser.getListUsers('1');
      setUser(result);
    }
    fetch();
  }, []);

  return (
    <Wrapper className="bg-[#EDEDED] "
      content=" flex justify-center "
    >
      <div className='flex flex-col items-center justify-center w-full'>
        <div className='text-left w-full md:w-4/5'>
          <div className='my-10 mx-auto max-w-fit'>
            <Search></Search>
          </div>
          <div>
            <div className='mb-5 text-[15px]'>
              <select className='form-select px-5 py-0 border border-solid border-gray-300'>
                <option value="grapefruit">tang</option>
                <option value="lime">giam</option>
              </select>
            </div>
            <table className='border border-collapse border-black table-fixed mb-10 text-center w-full text-xs md:text-base'>
              <thead className='bg-blue-800 h-auto text-white text-lg'>
                <tr>
                  <th className='border border-black px-2 py-2'>User Name</th>
                  <th className='border border-black px-2 py-2'>Email</th>
                  <th className='border border-black px-2 py-2'>Status</th>
                </tr>
              </thead>
              <tbody >
                {users?.errorStatus === false && users.data.listUsersWasFilter.map((users, index) =>  {
                  return (
                    <tr key={index}>
                      <td className='border border-black px-2 py-2'>{users.firstName} {users.lastName}</td>
                      <td className='border border-black px-2 py-2'>{users.email}</td>
                      {users.status == "Ban" && 
                      <td className='border border-black px-2 py-2'>
                        <Button className='h-[25px] w-[50px] mx-auto  bg-red-600'><span>{users.status}</span></Button>
                      </td>}
                      {users.status == "Unban" && <td className='border border-black px-2 py-2'>
                        <Button className='h-[25px] w-[50px] mx-auto bg-green-500'><span>{users.status}</span></Button>
                      </td>}
                      
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
export default Ban;