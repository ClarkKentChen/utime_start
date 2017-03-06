import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Table, Pagination, Popconfirm, Button } from 'antd';
import styles from './Users.css';
import { PAGE_SIZE } from '../../constants';
import  login from '../../images/login_logo.png';
import  zh from '../../images/zh_001.png';
import  login2 from '../../images/login_002.png';
import  loginBtn from '../../images/login_btn.png';
// import login from '../src/images/login_bg.png';

function createHandler(values) {
    dispatch({
        type: 'users/create',
        payload: values,
    });
}


function Users({ dispatch, list: dataSource, loading, page: current }) {
    // function deleteHandler(id) {
    //     dispatch({
    //         type: 'users/remove',
    //         payload: id,
    //     });
    // }

    // function pageChangeHandler(page) {
    //     dispatch(routerRedux.push({
    //         pathname: '/users',
    //         query: { page },
    //     }));
    // }

    /*const columns = [{
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => < a href = "" > { text } </a>,
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Website',
            dataIndex: 'website',
            key: 'website',
        },
        {
            title:'Operation',
            key: 'operation',
            render: (text, { id }) => ( <span className = { styles.operation } >
                <a href = "" > Edit </a> <Popconfirm title = "Confirm to delete?"onConfirm = { deleteHandler.bind(null, id) } >
                <a href = "" > Delete </a> </Popconfirm> </span>
            ),
        },
    ];*/
// handleSubmit(){
//   dispatch(routerRedux.push('./orderList'))
// }
const handleSubmit=()=>(  dispatch(routerRedux.push('components/orderList/orderList')));
    return ( 
    <div className={styles.login_bg}>
        <div className={styles.loginHeader}>
          <img src={login}/>
        </div>
        <div className={styles.form_text}>
          <form>
            <ul>
              <li><span><img src={zh}/></span><input type="text" placeholder="账号"/> </li>
              <li><span><img src={login2}/></span><input type="password" placeholder="密码"/> </li>
              <li><button onClick={handleSubmit}><img src={loginBtn} /></button></li>
            </ul>
          </form>
        </div>
      </div>
    );
}

function mapStateToProps(state) {
    const{list, total, page } = state.users;
    console.log(typeof(total));

    return {
        loading: state.loading.models.users,
        list,
        total,
        page,
    };
    console.log(total);
}
export function create(values) {
    return request('/api/users', {
        method: 'POST',
        body: JSON.stringify(values),
    });
}
export default connect(mapStateToProps)(Users);