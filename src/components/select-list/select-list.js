import React , { useEffect, useState } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

const SelectList = (props) => {
    SelectList.propTypes = {
      placeholder: PropTypes.string.isRequired,
      options: PropTypes.array.isRequired,
      parentOutput: PropTypes.func.isRequired,
      maxwidth: PropTypes.string,
      value: PropTypes.array,
    };

    // const [active, setActive] = useState(false);
    const [selectedOption, setSelectedOption] = useState([]);

    useEffect(() => {
      setSelectedOption(props.selectedOption);
    }, [props.selectedOption]);

    const onChange = selectedOption => {
      setSelectedOption(selectedOption);
      props.parentOutput(selectedOption);
    };

      const { options, placeholder, maxwidth } = props;
      const customStyles = {
        container: (base) => ({
          ...base,
          flexGrow: 1,
          marginRight: '8px',
          maxWidth: maxwidth ? maxwidth : '100%'
        }),
        control: (base, state) => ({
          ...base,
          backgroundColor: "#EDF5E1",
          borderRadius: '.5em',
          boxShadow: '0 1px 0 1px rgba(0, 0,0,0.4)',
          border: '1px solid #6a6b6b',
          width: '100%',
          cursor: 'pointer',
          fontSize: 'inherit',
          margin: '0px 8px',
          '&:hover': {
            borderColor: '#5CDB95'
          }
        }),
        menu: base => ({
          ...base,
          color: '#05386B',
          backgroundColor: "#EDF5E1",
          borderRadius: 0,
          margin: '0px 8px',
        }),
        menuList: base => ({
          ...base,
          padding: 0,
        }),
        option: (base, state) => ({
          ...base,
          backgroundColor: state.isFocused ? '#d8e2c8' : '#EDF5E1',
          textOverflow: 'ellipsis',
        }),
        placeholder: base => ({
          ...base,
          textOverflow: 'ellipsis',
          width: '100%',
          whiteSpace: 'nowrap',
          overflow: 'hidden'
        }),
        indicators: base => ({
          ...base,
          color: 'green'
        })
      }
        return (
          <Select
              styles={customStyles}
              value={selectedOption}
              onChange={onChange}
              placeholder={placeholder}
              isMulti={true}
              isSearchable={true}
              options={options}
            />
      )
    }

export { SelectList };