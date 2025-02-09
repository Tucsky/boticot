import axios from 'axios';
import store from '@/store';

const getAgents = async (): Promise<Array<any>> => {
  const { VUE_APP_NLU_SERVICE_URL, VUE_APP_NLU_PATH } = process.env;
  const url = `${VUE_APP_NLU_SERVICE_URL}${VUE_APP_NLU_PATH}`;
  const opt = {
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization: `Bearer ${store.getters.authToken()}`,
    },
  };
  const agents = await axios.get(url, opt);
  return agents.data;
};

const getAgent = async (agentName: string): Promise<any> => {
  const { VUE_APP_NLU_SERVICE_URL, VUE_APP_NLU_PATH } = process.env;
  const url = `${VUE_APP_NLU_SERVICE_URL}${VUE_APP_NLU_PATH}/${agentName}`;
  const opt = {
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization: `Bearer ${store.getters.authToken()}`,
    },
  };
  const agent = await axios.get(url, opt);
  return agent.data;
};

const getAgentFile = async (agentName: string): Promise<any> => {
  const { VUE_APP_NLU_SERVICE_URL, VUE_APP_NLU_PATH } = process.env;
  const url = `${VUE_APP_NLU_SERVICE_URL}${VUE_APP_NLU_PATH}/${agentName}/export`;
  const agent = await axios.get(url, {
    url: `${VUE_APP_NLU_SERVICE_URL}${VUE_APP_NLU_PATH}/${agentName}/export`,
    responseType: 'arraybuffer',
    headers: {
      encoding: null,
      'content-type': 'application/json',
      Authorization: `Bearer ${store.getters.authToken()}`,
    },
  });
  return agent.data;
};

const addAgent = async (body: any): Promise<any> => {
  const { VUE_APP_NLU_SERVICE_URL, VUE_APP_NLU_PATH } = process.env;
  const url = `${VUE_APP_NLU_SERVICE_URL}${VUE_APP_NLU_PATH}`;
  const opt = {
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization: `Bearer ${store.getters.authToken()}`,
    },
  };
  const response = await axios.put(url, body, opt);
  return response.data;
};

const deleteAgent = async (agentName: string): Promise<any> => {
  const { VUE_APP_NLU_SERVICE_URL, VUE_APP_NLU_PATH } = process.env;
  const url = `${VUE_APP_NLU_SERVICE_URL}${VUE_APP_NLU_PATH}/${agentName}`;
  const opt = {
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization: `Bearer ${store.getters.authToken()}`,
    },
  };
  const response = await axios.delete(url, opt);
  return response.data;
};

const deleteAgentIntent = async (agentName: string, intent: string): Promise<any> => {
  const { VUE_APP_NLU_SERVICE_URL, VUE_APP_NLU_PATH } = process.env;
  const url = `${VUE_APP_NLU_SERVICE_URL}${VUE_APP_NLU_PATH}/${agentName}/intents/${intent}`;
  const opt = {
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization: `Bearer ${store.getters.authToken()}`,
    },
  };
  const response = await axios.delete(url, opt);
  return response.data;
};

const getInputs = async (agentName: string, intentName: string, text: string, page: number): Promise<any> => {
  const { VUE_APP_NLU_SERVICE_URL, VUE_APP_NLU_PATH, VUE_APP_NLU_ENTRIES_PAGE_SIZE } = process.env;
  const url = `${VUE_APP_NLU_SERVICE_URL}${VUE_APP_NLU_PATH}/${agentName}/inputs`
    + `?intent=${intentName}&text=${text}&pageSize=${VUE_APP_NLU_ENTRIES_PAGE_SIZE}&pageNumber=${page}`;
  const opt = {
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization: `Bearer ${store.getters.authToken()}`,
    },
  };
  const response = await axios.get(url, opt);
  return response.data;
};

const deleteInput = async (agentName: string, idInput: string): Promise<any> => {
  const { VUE_APP_NLU_SERVICE_URL, VUE_APP_NLU_PATH } = process.env;
  const url = `${VUE_APP_NLU_SERVICE_URL}${VUE_APP_NLU_PATH}/${agentName}/inputs/${idInput}`;
  const opt = {
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization: `Bearer ${store.getters.authToken()}`,
    },
    json: true,
  };
  const response = await axios.delete(url, opt);
  return response.data;
};

const parseText = async (agentName: string, text: string): Promise<any> => {
  const { VUE_APP_NLU_SERVICE_URL, VUE_APP_NLU_PATH } = process.env;
  const url = `${VUE_APP_NLU_SERVICE_URL}${VUE_APP_NLU_PATH}/${agentName}/parse?test=true`;
  const opt = {
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
    },
  };
  const body = {
    text,
  };
  const response = await axios.post(url, body, opt);
  return response.data;
};

export {
  getAgents, addAgent, getInputs, deleteInput, parseText, getAgent, deleteAgent, deleteAgentIntent, getAgentFile,
};
