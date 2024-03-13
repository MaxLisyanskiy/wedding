import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

import { Button, Card, Checkbox, Form, Input, Modal, Radio, Space } from 'antd';

import classes from './survey.module.scss';

interface FormProps {
  name: string;
  ableAttend: string;
  allProgram: string;
  drinks: string[];
  comments: string;
}

const Survey = () => {
  const [loading, setLoading] = useState(false);

  const [form] = Form.useForm<FormProps>();

  const [modal, contextHolder] = Modal.useModal();

  useEffect(() => emailjs.init('0R5UDf5iXI-hnQRz_'), []);

  const handleSubmit = async () => {
    const serviceId = 'service_7lk3hig';
    const templateId = 'template_q602s9j';

    try {
      setLoading(true);

      await emailjs.send(serviceId, templateId, {
        name: form.getFieldValue('name'),
        ableAttend: form.getFieldValue('ableAttend'),
        allProgram: form.getFieldValue('allProgram'),
        drinks: form.getFieldValue('drinks'),
        comments: form.getFieldValue('comments'),
      });

      modal.success({
        title: 'Спасибо, что заполнили форму!',
        content: (
          <div className={classes.modalText}>
            {form.getFieldValue('ableAttend') === 'Смогу присутствовать' ? (
              <p>До скорой встречи! 😉</p>
            ) : (
              <p>Жаль, что Вы не сможете присутствовать 😔</p>
            )}
            <p>
              с любовью, <br />
              Максим и Дарья!
            </p>
          </div>
        ),
        okText: 'Закрыть',
      });

      form.resetFields();
    } catch (error) {
      modal.error({
        title: 'Произошла ошибка при отправке формы!',
        content: (
          <div className={classes.modalText}>
            <p>Попробуйте отправить снова</p>
            <p>или свяжитесь с нами по почте или по тлф:</p>
            <p style={{ fontFamily: 'Montserrat' }}>max_lisyanskiy@mail.ru</p>
            <p style={{ fontFamily: 'Montserrat' }}>+7 (921) 426-73-61</p>
          </div>
        ),
        okText: 'Закрыть',
      });
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="survey" className={classes.survey}>
      <h2 className="title">
        Опрос <span></span>
      </h2>

      <Card className={classes.card}>
        <Form layout="vertical" form={form} className={classes.form} onFinish={handleSubmit}>
          <Form.Item
            name="name"
            label={<span className={classes.label}>Фамилия и Имя присутствующих</span>}
            rules={[{ required: true, message: 'Обязательно к заполнению!' }]}
          >
            <Input placeholder="Напишите ФИ присутствующих" size="large" />
          </Form.Item>

          <Form.Item
            name="ableAttend"
            label={<span className={classes.label}>Сможете ли Вы присутствовать?</span>}
            rules={[{ required: true, message: 'Обязательно к заполнению!' }]}
          >
            <Radio.Group>
              <Space direction="vertical">
                <Radio value="Смогу присутствовать"> Да, конечно </Radio>
                <Radio value="Не смогу присутствовать"> Нет, не получится </Radio>
              </Space>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            name="allProgram"
            label={<span className={classes.label}>Вы будете присутствовать на всём свадебном дне?</span>}
          >
            <Radio.Group>
              <Space direction="vertical">
                <Radio value="Да, буду в ЗАГСе и на банкете"> Да, буду в ЗАГСе и на банкете</Radio>
                <Radio value="Нет, буду только в ЗАГСе"> Нет, буду только в ЗАГСе </Radio>
                <Radio value="Нет, буду только на банкете"> Нет, буду только на банкете </Radio>
              </Space>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            name="drinks"
            label={<span className={classes.label}>Что предпочитаете из напитков?</span>}
            tooltip="Можно выбрать несколько вариантов"
          >
            <Checkbox.Group>
              <Space direction="vertical">
                <Checkbox value="Красное вино"> Красное вино</Checkbox>
                <Checkbox value="Белое вино"> Белое вино </Checkbox>
                <Checkbox value="Шампанское"> Шампанское </Checkbox>
                <Checkbox value="Коньяк"> Коньяк </Checkbox>
                <Checkbox value="Виски"> Виски </Checkbox>
                <Checkbox value="Водка"> Водка </Checkbox>
                <Checkbox value="Не пью алкоголь"> Не пью алкоголь </Checkbox>
                <Checkbox value="Другое, напишу в комментариях">Другое, напишу в комментариях свои пожелания</Checkbox>
              </Space>
            </Checkbox.Group>
          </Form.Item>

          <Form.Item name="comments" label={<span className={classes.label}>Пожелания</span>}>
            <Input.TextArea rows={4} placeholder="Любые комментарии и пожелания" />
          </Form.Item>

          <Button type="primary" htmlType="submit" size="large" className={classes.button} loading={loading}>
            Подтвердить
          </Button>
        </Form>
      </Card>

      {contextHolder}
    </section>
  );
};

export default Survey;
