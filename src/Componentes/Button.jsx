import { Button as MantineButton } from '@mantine/core';

function Button({children,onClick,color,variant ='filled', ...rest }) {
  return (
    <MantineButton color={color} variant={variant} onClick={onClick} {...rest}> 
      {children}
    </MantineButton>
  );
}

export default Button;