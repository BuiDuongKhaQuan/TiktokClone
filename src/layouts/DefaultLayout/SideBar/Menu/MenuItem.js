import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function MenuItem({ children, icon, to }) {
    return (
        <NavLink to={to} className={(nav) => cx('menu-item', { active: nav.isActive })}>
            <div className={cx('icon')}> {icon}</div>
            <span className={cx('content')}>{children}</span>
        </NavLink>
    );
}

MenuItem.propTypes = {
    children: PropTypes.node.isRequired,
    icon: PropTypes.node.isRequired,
    to: PropTypes.string,
};

export default MenuItem;
