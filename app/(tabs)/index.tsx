import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, Dimensions } from "react-native";
import { Link } from "expo-router";

// Pega a largura da tela
const screenWidth = Dimensions.get("window").width;

const noticias = [
  {
    id: "1",
    titulo: "Inteligência Artificial transforma o mundo",
    resumo: "IA está mudando indústrias e criando novas oportunidades.",
    imagem:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "2",
    titulo: "Mudanças Climáticas: alerta global",
    resumo: "Estudos mostram aumento de eventos extremos no planeta.",
    imagem:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "3",
    titulo: "Brasil investe em energia limpa",
    resumo: "Governo aumenta apoio a fontes renováveis em 2025.",
    imagem:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "4",
    titulo: "Exploração Espacial avança em ritmo acelerado",
    resumo: "Novas missões prometem levar humanos a Marte em breve.",
    imagem:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "5",
    titulo: "Economia Digital cresce após pandemia",
    resumo: "Negócios online e fintechs dominam o mercado mundial.",
    imagem:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "6",
    titulo: "Saúde Mental ganha foco em políticas públicas",
    resumo: "Atenção ao bem-estar emocional aumenta em vários países.",
    imagem:
      "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "7",
    titulo: "Novas tecnologias revolucionam agricultura",
    resumo: "Drones e sensores ajudam no aumento da produtividade.",
    imagem:
      "data:image/jpeg;base64,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",
  },
];

export default function Home() {
  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Image
          source={require("../../assets/images/logonews.png")}
          style={styles.logoImage}
        />
        <Text style={styles.logoText}>PRIME NEWS</Text>
      </View>

      {/* Corpo */}
      <View style={styles.body}>
        <Text style={styles.sectionTitle}>📰 Notícias Recentes</Text>

        <FlatList
          data={noticias}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Link
              href={{
                pathname: "/explore/[id]",
                params: { id: item.id },
              }}
              asChild
            >
              <TouchableOpacity style={styles.card}>
                <Image source={{ uri: item.imagem }} style={styles.imagem} />
                <View style={styles.textContainer}>
                  <Text style={styles.titulo}>{item.titulo}</Text>
                  <Text style={styles.resumo}>{item.resumo}</Text>
                </View>
              </TouchableOpacity>
            </Link>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>

      {/* Rodapé */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2025 Notícias Coloridas - Todos os direitos reservados</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#007ACC",
    paddingVertical: 20,
    paddingHorizontal: 15,
    gap: 10,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  logoImage: {
    width: 40,
    height: 40,
  },
  logoText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    letterSpacing: 1,
    textAlign: "center",
    flex: 1,
  },
  body: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
    color: "#333",
    textAlign: "center",
  },
  card: {
    backgroundColor: "#FFFAF0",
    padding: 10,
    borderRadius: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#FFD700",
    shadowColor: "#FFA500",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  imagem: {
    width: screenWidth - 40,
    height: 200,
    borderRadius: 8,
    alignSelf: "center",
    marginBottom: 10,
  },
  textContainer: {
    paddingHorizontal: 5,
  },
  titulo: {
    fontSize: 18,
    fontWeight: "700",
    color: "#FF4500",
    marginBottom: 6,
  },
  resumo: {
    fontSize: 15,
    color: "#555",
    lineHeight: 22,
  },
  footer: {
    backgroundColor: "#007ACC",
    paddingVertical: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  footerText: {
    color: "#fff",
    fontSize: 13,
  },
});
