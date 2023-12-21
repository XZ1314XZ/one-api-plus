const defaultConfig = {
  input: {
    name: '',
    type: 1,
    key: '',
    base_url: '',
    other: '',
    model_mapping: '',
    models: [],
    groups: ['default']
  },
  inputLabel: {
    name: '渠道名称',
    type: '渠道类型',
    base_url: '渠道API地址',
    key: '密钥',
    other: '其他参数',
    models: '模型',
    model_mapping: '模型映射关系',
    groups: '用户组'
  },
  prompt: {
    type: '请选择渠道类型',
    name: '请为渠道命名',
    base_url: '可空，请输入中转API地址，例如通过cloudflare中转',
    key: '请输入渠道对应的鉴权密钥',
    other: '',
    models: '请选择该渠道所支持的模型',
    model_mapping:
      '请输入要修改的模型映射关系，格式为：api请求模型ID:实际转发给渠道的模型ID，使用JSON数组表示，例如：{"gpt-3.5": "gpt-35"}',
    groups: '请选择该渠道所支持的用户组'
  }
};

const typeConfig = {
  3: {
    inputLabel: {
      base_url: 'AZURE_OPENAI_ENDPOINT',
      other: '默认 API 版本'
    },
    prompt: {
      base_url: '请填写AZURE_OPENAI_ENDPOINT',
      other: '请输入默认API版本，例如：2023-06-01-preview'
    }
  },
  11: {
    input: {
      models: ['PaLM-2']
    }
  },
  14: {
    input: {
      models: ['claude-instant-1', 'claude-2']
    }
  },
  15: {
    input: {
      models: ['ERNIE-Bot', 'ERNIE-Bot-turbo', 'ERNIE-Bot-4', 'Embedding-V1']
    },
    prompt: {
      key: '按照如下格式输入：APIKey|SecretKey'
    }
  },
  16: {
    input: {
      models: ['chatglm_turbo', 'chatglm_pro', 'chatglm_std', 'chatglm_lite']
    }
  },
  17: {
    input: {
      models: ['qwen-turbo', 'qwen-plus', 'text-embedding-v1']
    }
  },
  18: {
    input: {
      models: ['SparkDesk']
    },
    prompt: {
      key: '按照如下格式输入：APPID|APISecret|APIKey'
    }
  },
  19: {
    input: {
      models: ['360GPT_S2_V9', 'embedding-bert-512-v1', 'embedding_s1_v1', 'semantic_similarity_s1_v1']
    }
  },
  22: {
    prompt: {
      key: '按照如下格式输入：APIKey-AppId，例如：fastgpt-0sp2gtvfdgyi4k30jwlgwf1i-64f335d84283f05518e9e041'
    }
  },
  23: {
    input: {
      models: ['hunyuan']
    },
    prompt: {
      key: '按照如下格式输入：AppId|SecretId|SecretKey'
    }
  }
};

export { defaultConfig, typeConfig };