import { useState } from "react";
import { Alert, FlatList, View } from "react-native";

import {
  Input,
  Header,
  NoTasks,
  TaskCard,
  Indicator,
  ButtonIcon,
} from "@/components";
import { theme } from "@/theme";
import { Task } from "@/types/home";
import { createStyle } from "./styles";
import Plus from "@assets/icons/plus.svg";

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [description, setDescription] = useState("");

  const styles = createStyle(theme);

  function handleChangeDescription(text: string) {
    setDescription(text);
  }

  function handleCheckTask(id: string) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isChecked: !task.isChecked } : task
      )
    );
  }

  function handleAddTask() {
    if (!description.trim()) {
      Alert.alert("Preencher o campo de tarefa.");

      return;
    }

    setTasks([
      ...tasks,
      { id: new Date().getTime().toString(), description, isChecked: false },
    ]);

    setDescription("");
  }

  function handleDeleteTask(id: string) {
    Alert.alert("Remover tarefa", "Tem certeza que deseja remover a tarefa?", [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Remover",
        style: "destructive",
        onPress: () => {
          setTasks(tasks.filter((task) => task.id !== id));
        },
      },
    ]);
  }

  const createdTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.isChecked).length;

  return (
    <>
      <Header />

      <View style={styles.content}>
        <View style={styles.form}>
          <Input
            value={description}
            placeholder="Adicione uma nova tarefa"
            onChangeText={handleChangeDescription}
          />

          <ButtonIcon
            onPress={handleAddTask}
            icon={<Plus width={theme.spacing[4]} height={theme.spacing[4]} />}
          />
        </View>

        <View style={styles.badgeContainer}>
          <Indicator color="blue" label="Criadas" value={createdTasks} />

          <Indicator color="purple" label="Concluídas" value={completedTasks} />
        </View>

        <FlatList
          data={tasks}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskCard
              {...item}
              onCheck={() => handleCheckTask(item.id)}
              onDelete={() => handleDeleteTask(item.id)}
            />
          )}
          ListEmptyComponent={<NoTasks />}
          ItemSeparatorComponent={() => (
            <View style={{ height: theme.spacing[4] }} />
          )}
        />
      </View>
    </>
  );
}
