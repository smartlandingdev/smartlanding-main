import React from 'react';
import { motion } from 'framer-motion';
import {
  DevicePhoneMobileIcon,
  CodeBracketIcon,
  BoltIcon,
  PaintBrushIcon,
  MagnifyingGlassIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

const Features: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      id: 'responsive',
      title: t('features.responsive.title'),
      description: t('features.responsive.description'),
      icon: DevicePhoneMobileIcon,
    },
    {
      id: 'seo',
      title: t('features.seo.title'),
      description: t('features.seo.description'),
      icon: MagnifyingGlassIcon,
    },
    {
      id: 'conversion',
      title: t('features.conversion.title'),
      description: t('features.conversion.description'),
      icon: BoltIcon,
    },
    {
      id: 'support',
      title: t('features.support.title'),
      description: t('features.support.description'),
      icon: CodeBracketIcon,
    },
    {
      id: 'updates',
      title: t('features.updates.title'),
      description: t('features.updates.description'),
      icon: PaintBrushIcon,
    },
    {
      id: 'analytics',
      title: t('features.analytics.title'),
      description: t('features.analytics.description'),
      icon: ChartBarIcon,
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('features.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('features.subtitle')}
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;

            return (
              <motion.div
                key={feature.id}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-6">
                  <IconComponent className="h-8 w-8 text-primary-600" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative Element */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <motion.div
                    className="w-12 h-1 bg-gradient-to-r from-primary-600 to-accent-400 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: 48 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.button
            onClick={() => {
              const element = document.getElementById('services');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-lg text-lg font-medium hover:bg-primary-700 transition-colors duration-200 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('hero.secondary_cta')}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;