import { useRouter } from 'next/router';

const URL = 'https://github.com/approvers/docs';

// TODO: ロゴを設定する
/**
 * nextra のテーマコンフィグファイル
 * https://nextra.site/docs/docs-theme/theme-configuration
 */
export default {
  logo: <span>approvers/docs</span>,
  docsRepositoryBase: `${URL}/pages`,
  project: {
    link: URL
  },
  editLink: {
    text: 'このページを編集する'
  },
  navigation: {
    prev: true,
    next: true
  },
  feedback: {
    content: 'Issueを提出する',
    useLink() {
      return `${URL}/issues/new`;
    }
  },
  footer: {
    text: <span>Copyright {new Date().getFullYear()} Approvers</span>
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== '/') {
      return {
        titleTemplate: '%s - approvers/docs'
      };
    }
  }
};
