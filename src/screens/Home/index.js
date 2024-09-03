import { StyleSheet, View, FlatList } from "react-native";
import { useState, useEffect } from "react";
import Header from "../../components/header";
import CardAgent from "../../components/cardAgentes";
import BannerValorant from "../../components/bannerValorant";
import FilterCategory from "../../components/filterCategory";

export default function HomeIndex() {
  const [agentes, setAgentes] = useState();
  const [filteredAgentes, setFilteredAgentes] = useState();

  useEffect(() => {
    async function buscarAgentes() {
      try {
        const response = await fetch(
          "https://valorant-api.com/v1/agents?language=pt-BR"
        );
        const data = await response.json();
        setAgentes(data.data);
        setFilteredAgentes(data.data);
      } catch (error) {
        console.log("Erro ao Buscar Agentes", error);
      }
    }
    buscarAgentes();
  }, []);

  const handleFilter = (filterRole) => {
    if (filterRole === "all") {
      setFilteredAgentes(agentes);
    } else {
      const filteredData = agentes.filter((agent) => {
        const roleName = agent.role ? agent.role.displayName : "Unknown";
        return roleName === filterRole;
      });
      setFilteredAgentes(filteredData);
    }
  };

  return (
    <>
      <Header />

      <View style={styles.container}>
        <BannerValorant />

        <FilterCategory onFilterSelect={handleFilter} />

        <FlatList
          data={filteredAgentes}
          keyExtractor={(item) => item.uuid}
          renderItem={({ item }) => (
            <CardAgent
              imgUrl={item.displayIcon}
              nameAgent={item.displayName}
              agent={item}
            />
          )}
          numColumns={3}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.baseCardAgents}
          columnWrapperStyle={styles.columnWrapper}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#001F38",
    alignItems: "center",
  },

  baseCardAgents: {
    padding: 10,
    maxWidth: 400,
    height: 100,
    width: "100%",
    flexGrow: 1,
  },

  columnWrapper: {
    justifyContent: "space-between",
    marginBottom: 13,
    gap: 20,
    justifyContent: "center",
  },
});
