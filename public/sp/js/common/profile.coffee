$ ->
  # スライドタブ
  target = $('#slide-tabs1')
  tab_width = (target.find('li').eq(0).width() + 1) * target.find('li').length
  target.find('ul').width tab_width

  return

# タイムライン
# timelineData =
#   'startYear': 1995
#   'endYear': 2015
#   'career': [
#     {
#       'name': '政治学研究科'
#       'type': 1
#       'start': '2010/01'
#       'end': '2010/12'
#     }
#     {
#       'name': '東京大学 法学部 法学政治学...'
#       'type': 1
#       'start': '2011/02'
#       'end': '2012/10'
#     }
#     {
#       'name': 'C&amp;R リーガ...'
#       'type': 1
#       'start': '2012/03'
#       'end': '2012/10'
#     }
#     {
#       'name': '東京大学 法学部 法学政治学研究科'
#       'type': 1
#       'start': '2012/07'
#       'end': '2015/06'
#     }
#     {
#       'name': 'C&amp;R リーガルエージェンシー社'
#       'type': 1
#       'start': '2013/01'
#       'end': '2014/09'
#     }
#     {
#       'name': 'C&amp;R リーガルエージェンシー社'
#       'type': 1
#       'start': '2014/01'
#       'end': '2017/09'
#     }
#   ]

timelineData =
  'startYear': 2009
  'endYear': 2020
  'career': [
    {
      'name': '政治学研究科'
      'type': 1
      'start': '2010'
      'end': '2010'
    }
    {
      'name': '東京大学 法学部 法学政治学...'
      'type': 1
      'start': '2011'
      'end': '2012'
    }
    {
      'name': 'C&R リーガ...'
      'type': 2
      'start': '2012'
      'end': '2012'
    }
    {
      'name': '東京大学 法学部 法学政治学研究科'
      'type': 1
      'start': '2012'
      'end': '2015'
    }
    {
      'name': 'C&R リーガルエージェンシー社'
      'type': 2
      'start': '2013'
      'end': '2014'
    }
    {
      'name': 'C&R リーガルエージェンシー社'
      'type': 2
      'start': '2014'
      'end': '2017'
    }
  ]

class TimeLine
  elemField = $('#profile-timeline-career')
  elemBackground =  $('#profile-timeline-background')
  data = null
  bgColor1 = [
    '#73afc0'
    '#406175'
    '#13253e'
    '#000000'
  ]
  bgColor2 = [
    '#7fd396'
    '#5e9574'
    '#1d3e37'
    '#000000'
  ]

  constructor: (args) ->
    data = args

  # 年表レンダリング
  renderYear: ->
    yearObjct = ""
    i = 0
    while i + data.startYear <= data.endYear
      yearObjct += '<div>' + (i + data.startYear) + '</div>'
      i++

    elemBackground
      .width 90 * i
      .append yearObjct
    return

  # 職歴レンダリング
  renderCareer: ->
    for d in data.career
      careerObjct = $('<div></div')
      careerObjct
        .text(d.name)
        .css
          'background-color': d.color
          'width': d.term
          'margin-top': d.layer
          'left': d.position
      elemField.append careerObjct

  # dataから追加情報を作成してdataに追加してく
  dataFormatting: ->
    objWidth = 90
    objHeight = 20
    c1 = 0
    c2 = 0

    for key, value of data.career
      layerPos = 1
      # 学歴か職歴かで色決め
      if data.career[key].type is 1
        data.career[key].color = bgColor1[c1++]
      else if data.career[key].type is 2
        data.career[key].color = bgColor2[c2++]
        layerPos = -1

      # 長さ決め
      data.career[key].term = objWidth * (value.end - value.start + 1)
      # console.log(data.career[key].term)

      # 横位置決め
      data.career[key].position = objWidth * (value.start - data.startYear)
      # console.log(value.end, data.startYear, value.end - data.startYear, objWidth * (value.end - data.startYear))

      # 縦位置決め
      layer = 0
      for k, v of data.career
        aaa = if value.type is 1 then 10 else -30

        # 同じ配列になったら抜ける
        if k is key
          break
        # startが他のstart~endにかぶっているか、タイプが同じヤツ
        if value.start >= v.start and value.start <= v.end and (v.type is value.type)
          layer += 1
        # if key is '3'
        #   console.log value.start >= v.start, value.start <= v.end, v.type is value.type, layer, value.start, v.start, v.end

      data.career[key].layer = objHeight * layer * layerPos + aaa
      # console.log objHeight, layer, aaa, layerPos
      # console.log '-----------------------------'
    return

career = new TimeLine(timelineData)
career.renderYear()
career.dataFormatting()
career.renderCareer()






# graph1Data = [
#   {
#     'name': 'M&A ・・・・・・・８年'
#     'ratio3': 30
#     'ratio10': 30
#   }
#   {
#     'name': 'ファイナンス ・・・８年'
#     'ratio3': 25
#     'ratio10': 25
#   }
#   {
#     'name': '知的財産 ・・・・・８年'
#     'ratio3': 15
#     'ratio10': 15
#   }
#   {
#     'name': 'その他'
#     'ratio3': 30
#     'ratio10': 30
#   }
# ]


# class PieGraf
#   name = null
#   ratio3 = null
#   ratio10 = null
#   id = null
#   r = 90    # 円グラフの半径
#   svg = null
#   color1 = [
#     '#73afc0'
#     '#406175'
#     '#13253e'
#     '#bbb'
#   ]
#   color2 = [
#     '#7fd396'
#     '#5e9574'
#     '#1d3e37'
#     '#000000'
#   ]
#   constructor: (a, b, c, d) ->
#     name = a
#     ratio3 = b
#     ratio10 = c
#     id = d
#   renderGraph: ->
#
#     dataSet = d3.range(4).map (d,i)->
#       name: name[i]
#       ratio: ratio3[i]
#     console.log dataSet
#
#     # カラースケールをオリジナルスケールとして指定する
#     colorScale = d3.scale.ordinal()
#       .domain(name)     # 名前一覧を指定
#       .range(color1)
#
#     # 作る場所を指定
#     svg = d3.select(id)
#
#     arcsGroup = svg
#       .data([dataSet])   # pieで変換するために要素１の配列としてデータを渡す
#       .append('g')
#       .attr("width", 180)
#       .attr("height", 180)
#
#     pie = d3.layout.pie().value((d)-> d.value)         # 値からstartAngle,endAngleを生成する
#     arc = d3.svg.arc().outerRadius(r).innerRadius(65)      # starAnge,endAngleからd要素を生成する
#
#     sliceGroup = arcsGroup.selectAll('g')
#       .data(pie)
#       .enter()
#       .append('g')
#       .attr('transform', 'translate('+ [300, 90] + ')')
#
#     # 円グラフ描画
#     slicePaths = sliceGroup.append('path')
#       .attr(
#         'd': arc
#         'fill': (d, i)-> colorScale(name[i])
#       )
#
#     # 凡例を表示するグループ要素
#     svg.append('g')
#       .attr('class', 'legendLinear')
#       .attr('transform', 'translate(20, 20)')
#
#     # スケールを元に凡例を生成する
#     legendLinear = d3.legend.color()
#       .shape('circle')
#       .shapeWidth(15)
#       .scale(colorScale)
#
#     # 凡例を描画する
#     svg.select('.legendLinear').call(legendLinear)
#
#
# graphName_1 = ['M&A ・・・・・・・８年', 'ファイナンス ・・・８年', '知的財産 ・・・・・８年','その他']
# graphRatio3_1 = [30, 25, 15, 30]
# graphRatio10_1 = [30, 25, 15, 30]
#
# pieGraf1 = new PieGraf(graphName_1, graphRatio3_1, graphRatio10_1, '#graph1')
# pieGraf1.renderGraph()