import React from 'react';
import { Button, Heading } from '@amsterdam/asc-ui';

interface ButtonProps {
  meta: {
    label: string;
    title: string;
    href: string;
  };
}

const LinkButton: React.FC<ButtonProps> = ({ meta: { label, href, title } }) => (
  <div>
    <Heading as="h2" styleAs="h3">
      {title}
    </Heading>

    <Button type="button" variant="primary" as="a" href={href}>
      {label}
    </Button>
  </div>
);

export default LinkButton;
