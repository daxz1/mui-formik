const styles = ({ spacing }) => ({
  container: {
    position: 'relative',
    display: 'inline-block',
  },
  containerFullWidth: {
    display: 'block',
  },
  field: {
    flexWrap: 'wrap',
    padding: '12px 0 8px 12px',
  },
  fieldInput: {
    padding: '8px 8px 9px 4px',
    width: 'auto',
    flexGrow: 1,
  },
  fieldFocused: {},
  fieldNotchedOutline: {},
  chipRoot: {
    marginRight: spacing(1),
    marginBottom: spacing(0.5),
  },
});

styles.traits = [
  'container',
  'containerFullWidth',
  'field',
  'fieldInput',
  'fieldFocused',
  'fieldNotchedOutline',
  'chipRoot',
  'chipLabel',
  'chipDeletable',
  'chipDeleteIcon',
];

export default styles;
