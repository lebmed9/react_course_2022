import React, { useEffect, useState } from 'react';
import PageWrapper from '../../common/PageWrapper';
import { data } from '../../../helpers';
import UserList from './UserList';
import Button from '../../common/Button';

const MainPage = () => {
  useEffect(() => console.log('MAIN_PAGE - MOUNT'), []);

  const [listVisible, setListVisible] = useState(false);
  const handler = () => {
    setListVisible((prev) => !prev);
  };
  return (
    <PageWrapper>
      <h1>User List</h1>
      {listVisible ? <UserList data={data} /> : <h2>Список скрыт</h2>}
      {/* {listVisible && <UserList data={data} />} */}
      <Button title={listVisible ? 'Скрыть список' : 'Показать список'} onClick={handler} />
    </PageWrapper>
  );
};
export default MainPage;
