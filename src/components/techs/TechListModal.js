import React, { useEffect } from 'react';
import TechItem from './TechItem';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTech } from '../../actions/techActions';

const TechListModal = ({ getTech, tech: { techs, loading } }) => {
  useEffect(() => {
    getTech();
    // eslint-disable-next-line
  }, [])

  return (
    <div id='tech-list-modal' className='modal'>
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {!loading &&
            techs !== null && techs.map(tech => (
              <TechItem tech={tech} key={tech.id} />
            ))}
        </ul>
      </div>
    </div>
  )
}

TechListModal.propTypes = {
  tech: PropTypes.object,
  getTech: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  tech: state.tech
})

export default connect(mapStateToProps, { getTech })(TechListModal);