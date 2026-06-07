import { SQLiteProvider, useSQLiteContext } from 'expo-sqlite';
import { View, Text } from 'react-native';

function TestDB() {
  const db = useSQLiteContext();
  return <Text>DB ready</Text>;
}

export default function App() {
  return (
    <SQLiteProvider
      databaseName="test.db"
      options={{
        libSQLOptions: {
          url: process.env.LIBSQL_URL,
          authToken: process.env.LIBSQL_AUTH_TOKEN
        }
      }}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TestDB />
      </View>
    </SQLiteProvider>
  );
}