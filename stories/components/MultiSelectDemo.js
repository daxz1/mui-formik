import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Demo from './Demo';
import MultipleSelect from '../../src/MultiSelect';
import { useAntSelectStyles } from '../../src/styles/SelectStyles';
import Close from '@material-ui/icons/Close';

const useCustomStyles = makeStyles(({ spacing, palette }) => ({
  field: {
    padding: '8px 0 8px 8px',
    borderRadius: spacing(1),
    backgroundColor: palette.grey[100],
    '&:hover': {
      backgroundColor: palette.grey[200],
    },
  },
  fieldFocused: {
    '&$field': {
      backgroundColor: palette.grey[200],
    },
  },
  chipRoot: {
    backgroundColor: palette.common.white,
    border: `1px solid ${palette.grey[300]}`,
  },
  menuContainer: {
    borderRadius: spacing(1),
    transform: 'translateY(8px)',
  },
  option: {
    minHeight: 40,
    fontSize: 15,
    '&:hover': {
      backgroundColor: palette.grey[100],
    },
  },
  optionSelected: {
    fontWeight: 500,
    '&$option': {
      backgroundColor: palette.grey[100],
      color: palette.primary.main,
      '&:hover': {
        backgroundColor: '#ff5252',
        color: palette.common.white,
        '& $iconSelected': {
          color: palette.common.white,
        },
      },
    },
  },
  icon: {
    opacity: 0.87,
    marginLeft: 'auto',
    fontSize: 18,
  },
  iconHighlighted: {
    opacity: 1,
  },
  iconSelected: {
    opacity: 1,
    color: palette.primary.main,
  },
}));

const MultiSelectDemo = props => {
  const antStyles = useAntSelectStyles();
  const customStyles = useCustomStyles();
  return (
    <Demo
      type={'grid'}
      demos={[
        ['Default', <MultipleSelect {...props} />],
        [
          'Custom styles',
          <MultipleSelect
            {...props}
            classes={customStyles}
            variant={'filled'}
            label={''}
            InputProps={{
              disableUnderline: true,
            }}
          />,
        ],
        [
          'Ant Design',
          <MultipleSelect
            {...props}
            label={''}
            selectedItemExcluded={false}
            ChipProps={{ deleteIcon: <Close /> }}
            overrides={antStyles}
          />,
        ],
      ]}
    />
  );
};

MultiSelectDemo.propTypes = {};
MultiSelectDemo.defaultProps = {};

export default MultiSelectDemo;
