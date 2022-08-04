
import Search from '../../components/search/Search';
import Button from '../../components/button/Button';
import Wrapper from '../../components/layout/defaultLayout/wrapper/Wrapper';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams, useNavigate } from 'react-router-dom';
import * as listUser from '../../api/authUser';

function Ban() {
  const [users, setUser] = useState({});
  const user = useSelector((state) => state.auth.login.currentUser);
  const navigate = useNavigate();
  const [count, setcount] = useState(1);

  useEffect(() => {
    async function fetch() {
      const result = await listUser.getListUsers(count);
      setUser(result);
    }
    fetch();
  }, [count]);

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
                {users?.errorStatus === false && users.data.listUsersWasFilter.map((users, index) => {
                  return (
                    <tr key={index}>
                      <td className='border border-black px-2 py-2'>{users.firstName} {users.lastName}</td>
                      <td className='border border-black px-2 py-2'>{users.email}</td>
                      {users.status == false &&
                        <td className='border border-black px-2 py-2'>
                          <Button className='h-[25px] w-[50px] mx-auto  bg-red-600'><span>Ban</span></Button>
                        </td>}
                      {users.status == true && <td className='border border-black px-2 py-2'>
                        <Button className='h-[25px] w-[50px] mx-auto bg-green-500'><span>Unban</span></Button>
                      </td>}

                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className='pagination flex flex-row gap-4 place-content-center py-5 text-xl'>
          <button onClick={() => setcount(1)}>&laquo;</button>
          <button onClick={() => setcount(1)}>1</button>
          <button onClick={() => setcount(2)}>2</button>
          <button onClick={() => setcount(3)}>3</button>
          <button onClick={() => setcount(4)}>4</button>
          <button onClick={() => setcount(5)}>5</button>
          <button onClick={() => setcount('{job.data.toltalPage}')}>&raquo;</button>
        </div>
      </div>

    </Wrapper>
  );
}
export default Ban;