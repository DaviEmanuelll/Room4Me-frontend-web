import { Question } from 'types/entities';
import { api } from './api';
import { CreateQuestionData } from 'types/services';

const servicesPrefix = '/question';

export const findAllQuestionsByProperty = async (propertyId: string) => {
  const { data } = await api.get<Question[]>(
    `${servicesPrefix}/findAllByPropertyId/${propertyId}`,
  );

  return data;
};

export const createQuestion = async (questionData: CreateQuestionData) => {
  const { data } = await api.post<Question>(servicesPrefix, questionData);
  return data;
};

export const updateQuestionAnswer = async (
  questionId: string,
  answer: string,
) => {
  const { data } = await api.patch<Question>(
    `${servicesPrefix}/updateAnswer/${questionId}`,
    { answer },
  );

  return data;
};

export const deleteQuestion = async (questionId: string) => {
  await api.delete(`${servicesPrefix}/${questionId}`);
};
