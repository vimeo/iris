import React from 'react';
import styled from 'styled-components';

import { Button as B, Card } from '../../components';
import { Header } from '../../typography';
import { rgba } from 'polished';

export default { title: 'Labs|Storyshots/' };

export function GrowthRedeemCard() {
  return (
    <Div>
      <RedeemCard code="12345ABCDE" />
    </Div>
  );
}

const Div = styled.div`
  padding: 10rem 5rem;
  background: ${({ theme }) => rgba(theme.content.color, 0.075)};
`;

const CardStyled = styled<any>(Card)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: auto;
  border-radius: 0.3rem;
  border-color: ${({ theme }) => rgba(theme.content.color, 0)};

  :after {
    display: none;
  }
`;

const Button = styled(B)`
  margin: 0;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

const Code = styled(Header).attrs({ size: '5' })`
  margin: 0 20px;
  font-size: 18px;
  letter-spacing: 0.2px;
`;

interface RedeemCardProps {
  code: string;
  className?: string;
}

const RedeemCard: React.SFC<RedeemCardProps> = ({
  code,
  ...props
}) => {
  return (
    <CardStyled {...props}>
      <Code>{code}</Code>
      <Button>Redeem</Button>
    </CardStyled>
  );
};
