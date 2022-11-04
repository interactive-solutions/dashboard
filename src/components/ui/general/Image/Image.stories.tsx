import { Story, Meta } from '@storybook/react';

import { Image, ImageProps } from './Image';

export default {
  title: 'components/general/Image',
  component: Image,
  args: {
    alt: 'Lorem ipsum'
  }
} as Meta;

const Template: Story<ImageProps & { amountOfItems: number }> = ({
  amountOfItems,
  ...args
}) => (
  <div>
    {Array.from('.'.repeat(amountOfItems || 99)).map((_, index) => (
      <div
        // eslint-disable-next-line react/no-array-index-key
        key={index}
        style={
          args.fill
            ? {
                position: 'relative',
                width: '100%',
                height: '333px',
                border: '2px dashed #616161',
                resize: 'both',
                overflow: 'auto'
              }
            : {}
        }
      >
        <Image
          {...args}
          src={`https://source.unsplash.com/592x333/?${
            index % 2 === 0 ? 'kitten' : 'kittens'
          }`}
          width={args.fill ? undefined : 592}
          height={args.fill ? undefined : 333}
          onLoad={(data) => console.log('onLoad', data)}
          onError={(data) => console.log('onError', data)}
        />
        {!!args.fill && (
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              backgroundColor: '#fff',
              padding: 8,
              borderTop: '2px dashed #616161',
              borderLeft: '2px dashed #616161'
            }}
          >
            Resize here 👇
          </div>
        )}
      </div>
    ))}
  </div>
);

export const Default = Template.bind({});

export const BackgroundColor = Template.bind({});
BackgroundColor.args = {
  backgroundColor: 'dark-400'
};

export const FillWithBackgroundColor = Template.bind({});
FillWithBackgroundColor.args = {
  fill: true,
  amountOfItems: 1,
  priority: true,
  backgroundColor: 'dark-400'
};

export const FillCover = Template.bind({});
FillCover.args = {
  fill: true,
  amountOfItems: 1,
  priority: true,
  fit: 'cover',
  position: 'center'
};

export const FillContainRight = Template.bind({});
FillContainRight.args = {
  fill: true,
  amountOfItems: 1,
  priority: true,
  fit: 'contain',
  position: 'right'
};
