import { notification } from 'antd';
import { ArgsProps } from 'antd/lib/notification';

export const openNotificationSuccess = (props: ArgsProps) => {
  notification.success({
    placement: 'bottomLeft',
    description: props.description,
    duration: 3,
    ...props,
  });
};

export const openNotificationError = (props: ArgsProps) => {
  notification.error({
    placement: 'bottomLeft',
    description: props.description,
    duration: 3,
    ...props,
  });
};
