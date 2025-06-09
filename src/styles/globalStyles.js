import {StyleSheet} from 'react-native';

export const colors = {
  primary: '#3b82f6',
  secondary: '#facc15',
  success: '#10b981',
  background: '#ffffff',
  cardBackground: '#f4f7fe',
  textPrimary: '#333333',
  textSecondary: '#6b7280',
  border: '#e5e7eb',
};

export const typography = StyleSheet.create({
  heading1: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  heading2: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  heading3: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  body: {
    fontSize: 16,
    color: colors.textPrimary,
  },
  caption: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  small: {
    fontSize: 12,
    color: colors.textSecondary,
  },
});

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 4,
  },
  card: {
    backgroundColor: colors.cardBackground,
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  checkmark: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  icon: {
    width: 24,
    height: 24,
    objectFit: 'cover',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  gapSmall: {
    gap: 8,
  },
  gapMedium: {
    gap: 16,
  },
  iconWrapper: {
    backgroundColor: colors.background,
    borderRadius: 12,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPrimary: {
    backgroundColor: colors.primary,
  },
  buttonSecondary: {
    backgroundColor: colors.secondary,
  },
  buttonSuccess: {
    backgroundColor: colors.success,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
  },
  buttonTextLight: {
    color: colors.background,
  },
  buttonTextDark: {
    color: colors.textPrimary,
  },
});
