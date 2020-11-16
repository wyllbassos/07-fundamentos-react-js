/* eslint-disable no-restricted-syntax */
import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import filesize from 'filesize';

import Header from '../../components/Header';

import { Container, Title, Form } from './styles';

import alert from '../../assets/alert.svg';
import api from '../../services/api';

interface FileProps {
  file: File;
  name: string;
  readableSize: string;
}

const Import: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<FileProps[]>([]);
  const history = useHistory();

  function submitTransaction(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const { type, value, title, category } = event.currentTarget;
    console.log(type, value, title, category);
  }

  return (
    <>
      <Header size="small" selected="/insert" />
      <Container>
        <Title>Inserir Movimentação</Title>
        <Form onSubmit={submitTransaction}>
          <div>
            <label htmlFor="type">Tipo</label>
            <select name="type">
              <option value="income">Entrada</option>
              <option value="outcome">Saída</option>
            </select>
          </div>
          <div>
            <label htmlFor="title">Título</label>
            <input type="text" name="title" />
          </div>
          <div>
            <label htmlFor="value">Valor</label>
            <input type="number" min={0} name="value" />
          </div>
          <div>
            <label htmlFor="category">Categoria</label>
            <input type="text" name="category" />
          </div>
          <button type="submit">Salvar</button>
        </Form>
      </Container>
    </>
  );
};

export default Import;
