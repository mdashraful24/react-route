import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <li className="mr-5 text-white hover:bg-violet-900 hover:rounded-sm px-3">
            <a href={route.path}>{route.name}</a></li>
    );
};

Link.propTypes = {
    route: PropTypes.object
}

export default Link;