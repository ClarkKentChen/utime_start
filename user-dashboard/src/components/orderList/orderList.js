import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Table, Pagination, Popconfirm, Button } from 'antd';
import styles from './orderList.css';
import { PAGE_SIZE } from '../../constants';

function orderList({ dispatch, list: dataSource, loading, total, page: current }) {
  return  (
    <div className={styles.login_bg}>
      <div className={styles.loginHeader}>
          <img src={login}/>
      </div>
       <div className={styles.form_text}>
          <form>
            <ul>
              <li><span><img src={zh}/></span><input type="text" placeholder="账号"/> </li>
              <li><span><img src={login2}/></span><input type="password" placeholder="密码"/> </li>
              <li><button><img src={loginBtn} /></button></li>
            </ul>
          </form>
        </div>
      </div>

    )
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

export default connect(mapStateToProps)(orderList);
