import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { ChevronDown, Heart, Shield, Clock, MessageCircle } from 'lucide-react'
import './App.css'

// Import images
import elonHeader from './assets/elon_musk_header.png'
import step1 from './assets/step1_consultation_2.png'
import step2 from './assets/step2_antifoam.png'
import step3 from './assets/step3_nasal_spray.png'
import step4 from './assets/step4_anesthesia.png'
import step5 from './assets/step5_tube_insertion.png'
import step6 from './assets/step6_endoscope_insertion.png'
import step7 from './assets/step7_observation.png'
import step8 from './assets/step8_completion.png'

function App() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const steps = [
    {
      id: 1,
      title: "問診",
      description: "安全な検査のための事前チェック",
      image: step1,
      details: [
        "薬のアレルギーの確認",
        "鼻の疾患の有無",
        "血液をサラサラにする薬の服用状況",
        "肝臓疾患の確認"
      ],
      elonComment: "宇宙飛行士の健康チェックと同じくらい重要だ！"
    },
    {
      id: 2,
      title: "消泡剤の服用",
      description: "胃をきれいにする準備",
      image: step2,
      details: [
        "やや苦味のある白い液体を飲む",
        "胃の中の泡を取り除く",
        "胃の壁をきれいにする効果",
        "検査の精度を向上させる"
      ],
      elonComment: "ロケット燃料ほど苦くないから大丈夫！"
    },
    {
      id: 3,
      title: "鼻腔への血管収縮剤スプレー",
      description: "鼻の準備をします",
      image: step3,
      details: [
        "鼻腔粘膜の血管を収縮させる",
        "出血を防ぐ効果",
        "鼻の通りを良くする",
        "ほとんど痛みはない"
      ],
      elonComment: "まるで宇宙服のヘルメットを装着するような感覚だ"
    },
    {
      id: 4,
      title: "局所麻酔",
      description: "痛みを和らげる麻酔",
      image: step4,
      details: [
        "鼻腔への麻酔薬注入",
        "局所麻酔なので眠くならない",
        "注射器型またはスプレー式",
        "痛みを大幅に軽減"
      ],
      elonComment: "テスラの自動運転より精密で安全だ"
    },
    {
      id: 5,
      title: "練習用チューブ挿入",
      description: "実際の感覚を確認",
      image: step5,
      details: [
        "細くて柔らかいチューブを使用",
        "ゼリー状の麻酔薬を塗布",
        "内視鏡と同じ太さで練習",
        "挿入感を事前に体験"
      ],
      elonComment: "SpaceXのドッキング練習のようなものだ"
    },
    {
      id: 6,
      title: "内視鏡挿入",
      description: "いよいよ本番の検査開始",
      image: step6,
      details: [
        "前処置を行った側の鼻から挿入",
        "違和感はあるが痛みはほとんどない",
        "ゆっくりと慎重に挿入",
        "医師が丁寧に操作"
      ],
      elonComment: "火星探査ローバーの着陸より簡単だ！"
    },
    {
      id: 7,
      title: "胃の観察",
      description: "自分の胃を見てみよう",
      image: step7,
      details: [
        "食道、胃、十二指腸の順に観察",
        "モニターで自分でも確認可能",
        "検査中も医師と会話ができる",
        "気になることをその場で質問"
      ],
      elonComment: "まるで体内の宇宙探査だ！驚くべき光景だよ"
    },
    {
      id: 8,
      title: "検査完了",
      description: "お疲れさまでした！",
      image: step8,
      details: [
        "約30分～60分で水分摂取可能",
        "食事も通常通り可能",
        "眠くなる麻酔を使わないため即座に帰宅可能",
        "車の運転も問題なし"
      ],
      elonComment: "思ったより簡単だった！これなら誰でもできる"
    }
  ]

  const benefits = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "苦痛が少ない",
      description: "経口内視鏡より楽で、咽頭反射が抑えられます"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "会話ができる",
      description: "検査中も医師と会話でき、疑問をその場で解決"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "すぐに帰宅可能",
      description: "鎮静剤不要で、検査後すぐに日常生活に戻れます"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "安全性が高い",
      description: "局所麻酔のみで、全身への影響が最小限"
    }
  ]

  const faqs = [
    {
      question: "検査は痛いですか？",
      answer: "局所麻酔を使用するため、痛みはほとんどありません。違和感程度で済みます。"
    },
    {
      question: "検査時間はどのくらいですか？",
      answer: "実際の検査時間は10-15分程度です。前処置を含めても30分程度で完了します。"
    },
    {
      question: "検査後の注意事項はありますか？",
      answer: "30分～1時間後から飲食可能です。特別な制限はなく、すぐに日常生活に戻れます。"
    },
    {
      question: "どのくらいの頻度で検査を受けるべきですか？",
      answer: "一般的には年1回の検査が推奨されています。医師と相談して決めましょう。"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* Header Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 py-16 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <img 
              src={elonHeader} 
              alt="Elon Musk" 
              className="w-48 h-48 mx-auto mb-8 rounded-full border-4 border-white shadow-2xl"
            />
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              胃ーロン・マスクと学ぶ！
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6">
              鼻から胃カメラ検査ガイド
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              未来の技術者と一緒に、最新医療を体験しよう！
            </p>
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3"
              onClick={() => document.getElementById('steps').scrollIntoView({ behavior: 'smooth' })}
            >
              検査手順を見る
              <ChevronDown className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-8 text-gray-800">
              経鼻内視鏡検査とは？
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              鼻から細い内視鏡を挿入して胃の中を観察する検査です。
              従来の口からの検査と比べて苦痛が少なく、検査中も会話ができるのが特徴です。
              胃ーロン・マスクと一緒に、この革新的な医療技術を学んでいきましょう！
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section id="steps" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
            検査の8つのステップ
          </h3>
          
          <div className="max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <Card key={step.id} className="mb-8 overflow-hidden hover:shadow-xl transition-shadow">
                <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className="lg:w-1/2">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                  </div>
                  <div className="lg:w-1/2 p-8">
                    <div className="flex items-center mb-4">
                      <Badge variant="secondary" className="mr-3 text-lg px-3 py-1">
                        Step {step.id}
                      </Badge>
                      <h4 className="text-2xl font-bold text-gray-800">{step.title}</h4>
                    </div>
                    <p className="text-lg text-gray-600 mb-6">{step.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                      <p className="text-blue-800 font-medium italic">
                        💬 胃ーロンのコメント: "{step.elonComment}"
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
            よくある質問
          </h3>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-600">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">
            健康な未来への第一歩を踏み出そう
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            定期的な胃カメラ検査で、早期発見・早期治療を実現しましょう。
            胃ーロン・マスクも推奨する、革新的な医療技術です。
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
            医療機関に相談する
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 mb-4">
            ※ この情報は教育目的のものです。実際の検査については医療機関にご相談ください。
          </p>
          <p className="text-gray-500">
            © 2024 胃ーロン・マスクと学ぶ胃カメラ検査ガイド
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

