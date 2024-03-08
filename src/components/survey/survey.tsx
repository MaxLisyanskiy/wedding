import { Button, Card, Checkbox, Form, Input, Radio, Space } from 'antd';

import classes from './survey.module.scss';

const Survey = () => {
  const [form] = Form.useForm();

  return (
    <section id="survey" className={classes.survey}>
      <h2 className="title">
        Опрос <span></span>
      </h2>

      <Card className={classes.card}>
        <Form layout="vertical" form={form} className={classes.form}>
          <Form.Item label={<span className={classes.label}>Фамилия и Имя присутствующих</span>}>
            <Input placeholder="Напишите ФИ присутствующих" size="large" />
          </Form.Item>

          <Form.Item label={<span className={classes.label}>Сможете ли Вы присутствовать?</span>}>
            <Radio.Group>
              <Space direction="vertical">
                <Radio value="yes"> Да, конечно </Radio>
                <Radio value="no"> Нет, не получится </Radio>
              </Space>
            </Radio.Group>
          </Form.Item>

          <Form.Item label={<span className={classes.label}>Вы будете присутствовать на всём свадебном дне?</span>}>
            <Radio.Group>
              <Space direction="vertical">
                <Radio value="yesAllProgram"> Да, буду в ЗАГСе и на банкете</Radio>
                <Radio value="onlyZAGS"> Нет, буду только в ЗАГСе </Radio>
                <Radio value="onlyBanket"> Нет, буду только на банкете </Radio>
              </Space>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label={<span className={classes.label}>Что предпочитаете из напитков?</span>}
            tooltip="Можно выбрать несколько вариантов"
          >
            <Checkbox.Group>
              <Space direction="vertical">
                <Checkbox value="redWine"> Красное вино</Checkbox>
                <Checkbox value="whiteWine"> Белое вино </Checkbox>
                <Checkbox value="сhampagne"> Шампанское </Checkbox>
                <Checkbox value="сognac"> Коньяк </Checkbox>
                <Checkbox value="сognac"> Виски </Checkbox>
                <Checkbox value="vodka"> Водка </Checkbox>
                <Checkbox value="noAlco"> Не пью алкоголь </Checkbox>
                <Checkbox value="also"> Другое, напишу в комментариях свои пожелания </Checkbox>
              </Space>
            </Checkbox.Group>
          </Form.Item>

          <Form.Item label={<span className={classes.label}>Пожелания</span>}>
            <Input.TextArea rows={4} placeholder="Любые комментарии и пожелания" />
          </Form.Item>

          <Button type="primary" htmlType="submit" size="large" className={classes.button}>
            Подтвердить
          </Button>
        </Form>
      </Card>
    </section>
  );
};

export default Survey;
