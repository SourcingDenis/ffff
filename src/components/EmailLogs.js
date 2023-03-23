import styles from '../styles/EmailLogs.module.css';

const EmailLogs = ({ logs }) => {
  return (
    <div className={styles.logsContainer}>
      <h3>Email Logs</h3>
      <ul className={styles.logsList}>
        {logs.map((log, index) => (
          <li key={index} className={styles.logItem}>
            <div>
              <strong>To:</strong> {log.to}
            </div>
            <div>
              <strong>Subject:</strong> {log.subject}
            </div>
            <div>
              <strong>Body:</strong> {log.body}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmailLogs;
