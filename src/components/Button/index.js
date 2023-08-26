import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary,
    className,
    upload = false,
    rounded = false,
    outline = false,
    small = false,
    large = false,
    leftIcon,
    rightIcon,
    disabled,
    children,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const classes = cx('wrapper', {
        [className]: className,
        primary,
        upload,
        rounded,
        outline,
        disabled,
        small,
        large,
    });
    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    className: PropTypes.string,
    primary: PropTypes.bool,
    upload: PropTypes.bool,
    rounded: PropTypes.bool,
    outline: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    disabled: PropTypes.bool,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
};

export default Button;
