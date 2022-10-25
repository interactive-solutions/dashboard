import { Story, Meta } from '@storybook/react';

import { Image, ImageProps } from './Image';

export default {
  title: 'components/general/Image',
  component: Image
} as Meta;

const Template: Story<ImageProps & { amountOfItems: number }> = ({
  amountOfItems,
  ...args
}) => (
  <div>
    {Array.from('.'.repeat(amountOfItems || 99)).map((_, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <div key={index}>
        <Image
          {...args}
          src={`https://source.unsplash.com/592x333/?${
            index % 2 === 0 ? 'kitten' : 'kittens'
          }`}
          width={592}
          height={333}
          onLoad={(data) => console.log('onLoad', data)}
          onError={(data) => console.log('onError', data)}
        />
      </div>
    ))}
  </div>
);

export const Default = Template.bind({});

export const BackgroundColor = Template.bind({});
BackgroundColor.args = {
  backgroundColor: 'dark-400'
};

export const Fill = Template.bind({});
Fill.args = {
  layout: 'fill'
};

export const Fixed = Template.bind({});
Fixed.args = {
  layout: 'fixed'
};

export const Intrinsic = Template.bind({});
Intrinsic.args = {
  layout: 'intrinsic'
};

export const Responsive = Template.bind({});
Responsive.args = {
  layout: 'responsive'
};

export const Cover = Template.bind({});
Cover.args = {
  layout: 'fill',
  objectFit: 'cover',
  objectPosition: 'center',
  amountOfItems: 1
};
