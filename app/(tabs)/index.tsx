import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, Dimensions } from "react-native";
import { Link } from "expo-router";

const screenWidth = Dimensions.get("window").width;

const noticias = [
  {
    id: "1",
    titulo: "Inteligência Artificial transforma o mundo",
    resumo: "IA está mudando indústrias e criando novas oportunidades.",
    imagens: [
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60",
    ],
  },
  {
    id: "2",
    titulo: "Mudanças Climáticas: alerta global",
    resumo: "Estudos mostram aumento de eventos extremos no planeta.",
    imagens: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
      
    ],
  },
  {
    id: "3",
    titulo: "Brasil investe em energia limpa",
    resumo: "Governo aumenta apoio a fontes renováveis em 2025.",
    imagens: [
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=60",
      
    ],
  },
  {
    id: "4",
    titulo: "Exploração Espacial avança em ritmo acelerado",
    resumo: "Novas missões prometem levar humanos a Marte em breve.",
    imagens: [
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=800&q=60"
    ],
  },
  {
    id: "5",
    titulo: "Economia Digital cresce após pandemia",
    resumo: "Negócios online e fintechs dominam o mercado mundial.",
    imagens: [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=60"
    ],
  },
  {
    id: "6",
    titulo: "Saúde Mental ganha foco em políticas públicas",
    resumo: "Atenção ao bem-estar emocional aumenta em vários países.",
    imagens: [
      "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=800&q=60"
    ],
  },
  {
    id: "7",
    titulo: "Novas tecnologias revolucionam agricultura",
    resumo: "Drones e sensores ajudam no aumento da produtividade.",
    imagens: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK6ttJNXJ_xfGCqBrGYQkwAeXCwAJQrejh2g&s"
    ],
  },
];

export default function Index() {
  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Meu Catálogo de Notícias</Text>
      </View>

      {/* Lista de notícias */}
      <FlatList
        data={noticias}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link href={{ pathname: "/explore/[id]", params: { id: item.id } }} asChild>
            <TouchableOpacity style={styles.card}>
              <Text style={styles.titulo}>{item.titulo}</Text>
              <Text style={styles.resumo}>{item.resumo}</Text>
              <View style={styles.imagemContainer}>
                {item.imagens?.map((imgUrl, index) => (
                  <Image
                    key={index}
                    source={{ uri: imgUrl }}
                    style={styles.imagem}
                    resizeMode="cover"
                  />
                ))}
              </View>
            </TouchableOpacity>
          </Link>
        )}
      />

      {/* Rodapé */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2025 Meu Catálogo - Todos os direitos reservados</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 10,
  },
  header: {
    paddingVertical: 12,
    alignItems: "center",
    backgroundColor: "#007ACC",  // cor azul
    marginBottom: 12,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 20,
    padding: 16,
    elevation: 3,
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  resumo: {
    fontSize: 14,
    marginBottom: 12,
  },
  imagemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
  },
  imagem: {
    width: (screenWidth - 64) / 2,
    height: 120,
    borderRadius: 6,
  },
  footer: {
    paddingVertical: 14,
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    marginTop: 10,
  },
  footerText: {
    fontSize: 12,
    color: "#888",
  },
});
